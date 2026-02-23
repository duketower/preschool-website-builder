/**
 * web/formValidation.js
 * ─────────────────────
 * Lightweight, zero-dependency form validation for vanilla JS websites.
 * Displays inline errors, prevents submission, and clears on fix.
 *
 * Built-in validators:
 * required, email, phone (10-digit Indian mobile), minLength:N, maxLength:N, pattern:REGEX
 *
 * CSS hooks:
 * .field-error — Added to the input when invalid
 * .error-message — The <span> injected below the field
 *
 * Usage:
 * const rules = {
 *   name: ['required', 'minLength:2'],
 *   email: ['required', 'email'],
 *   phone: ['required', 'phone'],
 * };
 * form.addEventListener('submit', (e) => {
 *   e.preventDefault();
 *   clearErrors(form);
 *   const { valid, errors } = validateForm(form, rules);
 *   if (!valid) {
 *     Object.entries(errors).forEach(([name, msg]) => showError(form.elements[name], msg));
 *     return;
 *   }
 * });
 * initLiveValidation(form, rules);
 *
 * Source project: Binary Ventures — Website Startup
 */

const VALIDATORS = {
  required: (val) =>
    val.trim().length > 0 || 'This field is required.',

  email: (val) =>
    !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) || 'Enter a valid email address.',

  phone: (val) =>
    !val || /^[6-9]\d{9}$/.test(val.trim()) || 'Enter a valid 10-digit mobile number.',

  minLength: (val, n) =>
    !val || val.trim().length >= Number(n) || `Must be at least ${n} characters.`,

  maxLength: (val, n) =>
    !val || val.trim().length <= Number(n) || `Must be ${n} characters or fewer.`,

  pattern: (val, regex) =>
    !val || new RegExp(regex).test(val.trim()) || 'Invalid format.',
};

function validateForm(formEl, rules) {
  const errors = {};
  for (const [name, fieldRules] of Object.entries(rules)) {
    const field = formEl.elements[name];
    if (!field) continue;
    const val = field.value || '';
    for (const rule of fieldRules) {
      const [ruleName, ruleArg] = rule.split(':');
      const validator = VALIDATORS[ruleName];
      if (!validator) continue;
      const result = validator(val, ruleArg);
      if (result !== true) {
        errors[name] = result;
        break;
      }
    }
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

function showError(fieldEl, message) {
  if (!fieldEl) return;
  fieldEl.classList.add('field-error');
  const existing = fieldEl.parentElement.querySelector('.error-message');
  if (existing) existing.remove();
  const span = document.createElement('span');
  span.className = 'error-message';
  span.textContent = message;
  fieldEl.insertAdjacentElement('afterend', span);
}

function clearErrors(formEl) {
  formEl.querySelectorAll('.field-error').forEach(el => el.classList.remove('field-error'));
  formEl.querySelectorAll('.error-message').forEach(el => el.remove());
}

function initLiveValidation(formEl, rules) {
  for (const name of Object.keys(rules)) {
    const field = formEl.elements[name];
    if (!field) continue;
    const eventType = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventType, () => {
      field.classList.remove('field-error');
      const sibling = field.nextElementSibling;
      if (sibling && sibling.classList.contains('error-message')) sibling.remove();
    });
  }
}
